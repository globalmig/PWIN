export default function Location() {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <p className="text-title font-semibold text-center my-10">오시는길</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7028776407374!2d127.4618583!3d37.7735645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3563260e6291af71%3A0x943895cc6fb28046!2z7Y-J7JuQ7IKw7JeF!5e0!3m2!1sko!2skr!4v1748848558286!5m2!1sko!2skr"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[600px] border-0 rounded-xl"
      />
    </div>
  );
}
