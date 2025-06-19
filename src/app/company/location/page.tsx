export default function Location() {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7028776407374!2d127.4618583!3d37.7735645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3563260e6291af71%3A0x943895cc6fb28046!2z7Y-J7JuQ7IKw7JeF!5e0!3m2!1sko!2skr!4v1748848558286!5m2!1sko!2skr"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[250px] md:h-[500px] border-0 rounded-xl transform ease-in-out duration-500"
      />

      <div className="w-full flex mt-10  py-5 border-t-2 border-green-700 md:text-xl">
        <p className="w-[40%] font-semibold">주소</p>
        <p className="text-start">
          경기도 가평군 청평면 상천리 321-2 <br className="block md:hidden" />
          (상지로 11-111)
        </p>
      </div>
      <div className="w-full flex  py-5 border-b border-t  md:text-xl">
        <p className="w-[40%] font-semibold">전화번호</p>
        <p>031-584-0023~5</p>
      </div>
      <div className="w-full flex  py-5 border-b-2 border-green-700 md:text-xl">
        <p className="w-[40%] font-semibold">팩스</p>
        <p>031-584-0023</p>
      </div>
    </div>
  );
}
