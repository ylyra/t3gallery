
const mockUrls = [
  "https://utfs.io/f/7aff08b2-a6cb-4e7f-b534-c19dea442c89-tsx7ux.png",
  "https://utfs.io/f/7aff08b2-a6cb-4e7f-b534-c19dea442c89-tsx7ux.png",
  "https://utfs.io/f/7aff08b2-a6cb-4e7f-b534-c19dea442c89-tsx7ux.png",
  "https://utfs.io/f/7aff08b2-a6cb-4e7f-b534-c19dea442c89-tsx7ux.png",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index+1,
  url,
}))

export default async function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, idx) => (
          <div key={String(image.id).concat('-', String(idx))} className="w-48 shrink-0">
            <img src={image.url} alt=""  />
          </div>
        ))}
      </div>
      Hello
    </main>
  );
}
