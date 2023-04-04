import projectPortfolio from "../assets/img/portfolio/project-portfolio.png"

export default function Head({ title }) {
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta property="og:image" content={projectPortfolio.src} />
      <link rel="icon" href="/favicon.ico" />
      {/* <style>{"* {border: 1px solid red;}"}</style> */}
    </>
  )
}
