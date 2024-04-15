import 'server-only'

import { auth } from '@clerk/nextjs/server'

import { db } from '../db'

export async function findImagesFromUser() {
  const user = auth()

  if (!user.userId) {
    return []
  }

  return await db.query.images.findMany({
    where(fields, operators) {
      return operators.eq(fields.userId, user.userId)
    },
    orderBy(fields, operators) {
      return operators.desc(fields.createdAt)
    },
  })
}

export async function findImageById(id: number) {
  const user = auth()

  if (!user.userId) {
    throw new Error('User not found')
  }

  const image = await db.query.images.findFirst({
    where(fields, operators) {
      return operators.and(
        operators.eq(fields.userId, user.userId),
        operators.eq(fields.id, id),
      )
    },
  })

  if (!image) {
    throw new Error('Image not found')
  }

  return image
}
