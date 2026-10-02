const galleryImages = [
  { url: 'https://images.pexels.com/photos/5393654/pexels-photo-5393654.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Child laughing in a ball pit', large: true },
  { url: 'https://images.pexels.com/photos/5488878/pexels-photo-5488878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Child on a colorful slide', large: false },
  { url: 'https://images.pexels.com/photos/4964542/pexels-photo-4964542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Kids on trampoline', large: false },
  { url: 'https://images.pexels.com/photos/4005325/pexels-photo-4005325.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Child playing arcade racing game', large: false },
  { url: 'https://images.pexels.com/photos/27175639/pexels-photo-27175639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Child in a ball pit', large: false },
  { url: 'https://images.pexels.com/photos/9821653/pexels-photo-9821653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Children at arcade racing simulator', large: false },
  { url: 'https://images.pexels.com/photos/27175474/pexels-photo-27175474.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cheerful child in ball pit', large: false },
  { url: 'https://images.pexels.com/photos/8535885/pexels-photo-8535885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Child jumping on trampoline', large: false },
]

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Gallery</span>
          <h2 className="section-title">
            Moments of <span className="highlight">Joy</span>
          </h2>
          <p className="section-subtitle">
            See the smiles and laughter that fill Kutties Kingdom every day!
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div key={i} className={`gallery-item ${img.large ? 'large' : ''}`}>
              <img src={img.url} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
