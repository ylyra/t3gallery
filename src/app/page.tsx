import { db } from "~/server/db";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy(fields, operators) {
      return operators.desc(fields.createdAt)
    },
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images].map((image, idx) => (
          <div key={String(image.id).concat('-', String(idx))} className="w-48 shrink-0">
            <img src={image.url} alt=""  />
          </div>
        ))}
      </div>
      Hello
    </main>
  );
}
