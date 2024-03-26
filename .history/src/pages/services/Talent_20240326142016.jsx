{
  /* Iterate through sub-services */
}
<List className="list-style3">
  {/* <p>{subService.text}</p> */}
  {subService.subServices &&
    subService.subServices.map((subSubService, subIndex) => (
      <>
        <div className="row gx-60 space-top">
          {subService && subService.img ? (
            <>
              <div className="col-xl-6 align-self-center text-center text-xl-start">
                <SecTitle className="text-capitalize">
                  {subService.title}
                </SecTitle>
                <p className="mb-6 pb-2 pe-xl-12">{subService.text}</p>
              </div>
              <div className="col-xl-6 mb-50 mb-xl-0">
                <ImageBoxThree
                  imageOne={subService.img}
                  alt="Project"
                  className="w-100"
                />
              </div>
            </>
          ) : (
            <div className="col-xl-12 align-self-center text-center text-xl-start">
              <SecTitle className="text-capitalize">
                {subService.title}
              </SecTitle>
              <p className="mb-6 pb-2 pe-xl-12">{subService.text}</p>
            </div>
          )}
        </div>
      </>
    ))}
</List>;
