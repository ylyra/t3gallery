import 'server-only';

import { auth } from '@clerk/nextjs/server';

import { db } from '../db';

export async function findImagesFromUser() {
  const user = auth();

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