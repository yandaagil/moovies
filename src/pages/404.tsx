import Title from "@/components/head"

const NotFound = () => {
  return (
    <>
      <Title title="404" />

      <div className="flex flex-col space-y-5 items-center justify-center h-screen">
        <h1 className="text-9xl font-bold">404</h1>
        <h4 className="text-4xl font-bold">Not Found</h4>
      </div>
    </>
  )
}

export default NotFound