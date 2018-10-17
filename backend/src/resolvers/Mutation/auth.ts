import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { Context } from '../../utils'

export const auth = {
  async signup(parent, args, ctx: Context, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    })

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },

  async login(parent, { email, password }, ctx: Context, info) {
    const user = await ctx.db.query.user({ where: { email } })
    if (!user) {
      // throw new Error(`No such user found for email: ${email}`)
      return {
        error: {
          field: 'email',
          message: 'Email doesnt exist'
        }
      }
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      // throw new Error('Invalid password')
      return {
        error: {
          field: 'password',
          message: 'Invalid Password'
        }
      }
    }

    return {
      payload :{
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
      }
    }
  },
}
