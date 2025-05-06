"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface EventPageTemplateProps {
  date: string;
  title: string;
  location: string;
  heroImage: string;
  contentImage: string;
  description: string;
  meetupLink?: string;
  meetupLocation?: string;
  meetupTime?: string;
  departureTime?: string;
  arrivalTime?: string;
  lunchTime?: string;
  tavernLink?: string;
  details?: React.ReactNode;
  facebookLink?: string;
}

export default function EventPageTemplate({
  date,
  title,
  location,
  heroImage,
  contentImage,
  description,
  meetupLink,
  meetupLocation,
  meetupTime,
  departureTime,
  arrivalTime,
  lunchTime,
  tavernLink,
  details,
  facebookLink,
}: EventPageTemplateProps) {
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [isUpcoming, setIsUpcoming] = useState<boolean>(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const targetDate = new Date(date);
    const today = new Date();

    const diff = Math.ceil(
      (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diff > 0) {
      setDaysLeft(diff);
      setIsUpcoming(true);
    } else {
      setIsUpcoming(false);
    }
  }, [date]);

  return (
    <div className="relative bg-black text-white">
      <div className="relative h-[200vh] w-full scroll-smooth">
        {/* Main Image */}
        <div className="relative top-0 h-[90vh] w-full z-0">
          <Image
            src={heroImage}
            alt={`${title} Hero Image`}
            fill
            className="object-cover w-full h-full"
          />
          {/* Date of event */}
          <div className="absolute bottom-[10%] right-10 text-center text-white font-[Abhaya Libre] text-[80px] font-bold">
            {new Date(date).toLocaleDateString("en-AU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
          <div className="absolute bottom-[5%] right-10 text-center text-white font-[Abhaya Libre] text-[30px] font-bold">
            [{location.toUpperCase()}]
          </div>
        </div>

        <div className="flex w-full h-[2000px] bg-black px-10 gap-10 py-10 border-y-1 border-white">
          {/* Left: Image */}
          <div className="relative w-full h-full">
            <Image
              src={contentImage}
              alt={`${title} Content Image`}
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full text-white flex flex-col p-10 space-y-6">
            {isUpcoming && (
              <div className="text-[60px] font-extrabold uppercase tracking-wide text-center leading-tight animate-pulse [text-shadow:_2px_2px_0_#000,_-2px_-2px_0_#000]">
                {daysLeft} DAYS TILL THE EVENT
              </div>
            )}
            <div className="bg-black text-white p-10 rounded-2xl shadow-2xl space-y-10">
              <h2 className="text-5xl font-extrabold text-center uppercase tracking-wider">
                {title}
              </h2>
              <p className="text-2xl text-center font-light">{description}</p>

              {isUpcoming && (
                <div className="space-y-8 text-3xl">
                  {meetupLocation && (
                    <div>
                      <p className="font-semibold text-4xl">
                        📍 Meetup Location:
                      </p>
                      {meetupLink ? (
                        <a
                          href={meetupLink}
                          target="_blank"
                          className="text-blue-400 underline pl-14"
                        >
                          {meetupLocation}
                        </a>
                      ) : (
                        <p className="pl-14">{meetupLocation}</p>
                      )}
                    </div>
                  )}

                  {meetupTime && (
                    <div>
                      <p className="font-semibold text-4xl">🕙 Time:</p>
                      <p className="pl-14">{meetupTime}</p>
                    </div>
                  )}

                  {departureTime && (
                    <div>
                      <p className="font-semibold text-4xl">
                        🛻 Departure Time:
                      </p>
                      <p className="pl-14">{departureTime}</p>
                    </div>
                  )}

                  {arrivalTime && (
                    <div>
                      <p className="font-semibold text-4xl">
                        🍽️ Arrival at Destination:
                      </p>
                      <p className="pl-14">{arrivalTime}</p>
                    </div>
                  )}

                  {lunchTime && (
                    <div>
                      <p className="font-semibold text-4xl">🍴 Lunch Time:</p>
                      <p className="pl-14">{lunchTime}</p>
                      {tavernLink && (
                        <a
                          href={tavernLink}
                          target="_blank"
                          className="text-blue-400 underline pl-14"
                        >
                          View Location
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}

              {details && isUpcoming && (
                <div className="pt-6 text-3xl space-y-4">{details}</div>
              )}

              {facebookLink && isUpcoming && (
                <div className="pt-6 text-3xl">
                  <h3 className="font-semibold text-4xl">📢 Facebook Event</h3>
                  <p className="pl-14">
                    For more details and to RSVP, visit our&nbsp;
                    <a
                      href={facebookLink}
                      className="text-blue-400 underline"
                      target="_blank"
                    >
                      Facebook Event Page
                    </a>
                    .
                  </p>
                </div>
              )}
              {!isUpcoming && (
                <div className="pt-6 text-2xl">
                  <p className="pl-31">This event has already occured</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
