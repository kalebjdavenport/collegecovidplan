import React from "react"

export const CitationImage = (props, ref) => {
  return (
    <div className="flex flex-wrap">
      <h3 className="mt-12 font-bold text-xl w-full">
        Some changes your school is considering.
      </h3>
      <div className="p-4 mb-6 w-1/2">
        <img
          src="https://res.cloudinary.com/wow-your-client/image/upload/v1592412837/CollegeCovidPlan/Dorm.jpg"
          alt="Dorm diagram"
        />
        <p className="text-sm">
          The number of students in a dorm room will likely be reduced at your
          school.
        </p>
      </div>
      <div className="p-4 mb-6 w-1/2">
        <img
          src="https://res.cloudinary.com/wow-your-client/image/upload/v1592412835/CollegeCovidPlan/Classrooms.jpg"
          alt="Classroom diagram"
        />
        <p className="text-sm">
          Lecture hall capacity will likely be reduced at your school.
        </p>
      </div>

      <div className="p-4 mb-6 w-1/2">
        <img
          src="https://res.cloudinary.com/wow-your-client/image/upload/v1592412818/CollegeCovidPlan/reopened-publichealth-top.jpg"
          alt="New lecturehall designs"
        />
        <p className="text-sm">
          Learning environments will likely be re-arranged to comply with
          federal standards.
        </p>
      </div>
      <div className="p-4 mb-6 w-1/2">
        <img
          src="https://res.cloudinary.com/wow-your-client/image/upload/v1592412801/CollegeCovidPlan/photo_95619_landscape_850x566.jpg"
          alt="50% capacity buildings"
        />
        <p className="text-sm">
          School buildings will likely be reduced to half capacity.
        </p>
      </div>
      <p className="text-xs">
        Elias, Jacquelyn. Classrooms. 2020. Images property of The Chronicle of
        Higher Education.
      </p>
    </div>
  )
}
