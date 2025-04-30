import EventPageTemplate from "@/components/EventPageTemplate";

export default function CamsWharfPage() {
  return (
    <EventPageTemplate
      date="2025-05-18"
      title="Cams Wharf Lunch"
      location="Cams Wharf"
      heroImage="/images/camswharf.jpg"
      contentImage="/images/camswharf2.jpg"
      description="Meetup at Rofe Park and cruise to Cams Wharf Tavern for Lunch."
      meetupLink="https://maps.app.goo.gl/p5Yxu1TtRXeurBFb7"
      meetupLocation="Rofe Park"
      meetupTime="Arrive at 10:00 AM"
      departureTime="Leave at 10:45 AM"
      arrivalTime="Between 12:00 – 12:30 PM"
      lunchTime="12:30 PM booked at Cams Wharf Tavern"
      tavernLink="https://maps.app.goo.gl/tMtkkEk6Lb4YNiBS6"
      facebookLink="https://facebook.com/events/123456"
    />
  );
}
