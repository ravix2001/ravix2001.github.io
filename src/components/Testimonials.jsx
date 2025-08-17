import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
    const testimonials = [
    {
      id: 1,
      name: "Rajesh Pandey",
      role: "MERN Stack Developer at YouthIT",
      content:
        "Outstanding Java developer with strong AI/ML skills and practical NLP experience.",
      rating: 5,
      // image: "https://media.licdn.com/dms/image/v2/D5603AQEWI1KgDHr7TA/profile-displayphoto-scale_200_200/B56ZfB5rXsHoAc-/0/1751304814298?e=1758153600&v=beta&t=0cV7s1oEA7yQVubaO9Bo57ZxDjZCEmj6Pn6DM8oUj7g",
    },
    {
      id: 2,
      name: "Ritika Niraula",
      role: "Student at IOE Purwanchal Campus",
      content:
        "Delivered impressive results with advanced NLP techniques and AI/ML knowledge.",
      rating: 5,
      // image: "https://media.licdn.com/dms/image/v2/D4E03AQGZxMzuouF8mw/profile-displayphoto-scale_200_200/B4EZg8ri5UGcAY-/0/1753364707253?e=1757548800&v=beta&t=gaNOqPtpUxIlXOHt9SyI_S_y1TweOqiSbyXEXZbO3jI",
    },
    {
      id: 3,
      name: "Nigam Yadav",
      role: "Student at IOE Purwanchal Campus",
      content:
        "Exceptional problem solver with solid Java skills and valuable project contributions.",
      rating: 5,
      // image: "https://media.licdn.com/dms/image/v2/D5603AQHvWs51Shx6UQ/profile-displayphoto-shrink_200_200/B56ZVM._foHQAY-/0/1740753336876?e=1758153600&v=beta&t=rDB_RzBxq87nKNdiuhqfcsP8uQoC48E1CTl7qESJb7Q",
    },
    
  ];

  return (
    <>
      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="section-padding bg-white dark:bg-gray-800"
      >
        <div className="container-custom">
          <h2 className="text-center text-gray-900 dark:text-white mb-12 animate-fade-in-up">
            {/* What Clients Say */}
            What Others Say
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="card-dark animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center mb-4">
                    {/* <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    /> */}
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star
                        key={`star-${testimonial.id}-${i}`}
                        className="w-4 h-4 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gray-400 mb-2" />
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
