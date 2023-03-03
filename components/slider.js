export default function Slider() {

    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            title: 'CEO of ABC Company',
            img: '/images/testimonial-1.jpg',
        },
        {
            id: 2,
            name: 'Jane Doe',
            title: 'CEO of ABC Company',
            img: '/images/testimonial-2.jpg',
        },
        {
            id: 3,
            name: 'John Doe',
            title: 'CEO of ABC Company',
            img: '/images/testimonial-3.jpg',
        },
    ]


    return (
        <div className="relative">
        <div id="carrusel" class="flex flex-row overflow-x-auto mx-6">
          </div>
      
        <div id="carrousel-left" className="arrow absolute bg-blue-700 text-white p-3 shadow cursor-pointer hover:bg-blue-600"><span class="lnr lnr-chevron-left"></span></div>
        <div id="carrousel-right"  className="arrow absolute right-0 bg-blue-700 text-white p-3 shadow cursor-pointer hover:bg-blue-600"><span class="lnr lnr-chevron-right"></span></div>
        </div>
    );
}
