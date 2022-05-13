export const SubscriptionCarousel = () => {
  return (
    <section id="slider" className="relative mx-auto h-[260px] w-[200px]">
      <input type="radio" name="slider" id="s1" className="hidden" />
      <input type="radio" name="slider" id="s2" checked className="hidden" />
      <input type="radio" name="slider" id="s3" className="hidden" />

      <label htmlFor="s1" id="slide1" className="subscriptionCard">
        1
      </label>
      <label htmlFor="s2" id="slide2" className="subscriptionCard">
        2
      </label>
      <label htmlFor="s3" id="slide3" className="subscriptionCard">
        3
      </label>
    </section>
  )
}
