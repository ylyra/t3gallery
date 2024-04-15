import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy(fields, operators) {
      return operators.desc(fields.createdAt)
    },
  });

  return <div className="flex flex-wrap gap-4 container mx-auto">
  {images.map((image, idx) => (
    <div key={String(image.id).concat('-', String(idx))} className="w-48 shrink-0 flex flex-col gap-1">
      <img src={image.url} alt=""  />

      <small>{image.name}</small>
    </div>
  ))}
</div>
}

export default async function HomePage() {

  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">
          Please sign in above
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>      
    </main>
  );
}
