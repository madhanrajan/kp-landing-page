import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Klinik Pillai - The Best Clinic in Butterworth, Pulau Pinang',
  description:
    'Number 1 clinic in Butterworth, Pulau Pinang',
};


function Header() {
    return (<header>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    
                    
                    </div>
                    <a className="btn btn-ghost text-xl">Klinik Pillai</a>
                </div>
                {
      /* <div className="navbar-center hidden lg:flex">
         <ul className="menu menu-horizontal px-1">
         <li><a>Item 1</a></li>
         <li>
             <details>
             <summary>Parent</summary>
             <ul className="p-2">
                 <li><a>Submenu 1</a></li>
                 <li><a>Submenu 2</a></li>
             </ul>
             </details>
         </li>
         <li><a>Item 3</a></li>
         </ul>
      </div> */
    }
                <div className="navbar-end">
                    <a className="btn">Book Appointment</a>
                </div>
            </div>
        </header>);
}

function Hero(){
  return <section>
    <div className="hero min-h-screen overflow-hidden" style={{backgroundImage: 'url("/doctorheroimage.jpg")'}}>
      <div className="hero-overlay bg-opacity-5"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-black">
          <h1 className="mb-5 text-5xl font-bold">Welcome to<br/>Klinic Pillai!</h1>
          <p className="mb-5">Scroll to learn more or book an appointment!</p>
          <button className="btn btn-primary">Book Appointment</button>
        </div>
      </div>
    </div>
  </section>
}


function ServicesCardTile() {
    return (
      <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-x-2 hover:-translate-y-1 hover:shadow-lg">
      <div className="card-body items-center text-center gap-4">
      <div className="w-20 h-20">
          <FontAwesomeIcon icon={faStethoscope} className="text-xs"></FontAwesomeIcon>
        </div>
        <h2 className="card-title">ECG Services</h2>
        <p>We provide a large <br className="hidden xl:inline" /> list of ECG services!</p>
      </div>

       </div>
    
    
    );
}


function Services(){
  return (<>
    <section className="py-10 md:py-16">
        <div className="container">
          <div className="text-center">
            <h2 className="text-xl sm:text-5xl font-bold mb-4">What we do</h2>
            <p className="text-lg sm:text-2xl mb-6 md:mb-14">Get the best services at affordable prices as listed below!</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 px-4">
              {/* make a padding for this, use tailwind */}
  
      <ServicesCardTile></ServicesCardTile>
      <ServicesCardTile></ServicesCardTile>
      <ServicesCardTile></ServicesCardTile>
      <ServicesCardTile></ServicesCardTile>
      <ServicesCardTile></ServicesCardTile>
      <ServicesCardTile></ServicesCardTile>
  
</div>


          </div>

        </div>
    </section>
  
  
  </>)
}

function PartnersTile(){
  return <div className='card'>
  <div className='card-body'>

  <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-x-2 hover:-translate-y-1 hover:shadow-lg">
  <div className="card-body items-center text-center gap-4">
  <div className="w-20 h-20">
  <Image src="/tnb.png" alt="" width={200} height={200} />
    </div>
    <h2 className="card-title">Tenaga Nasional</h2>
    
    
  </div>

   </div>
  
  
  </div>
</div>
}

function Partners(){
  return <>
    <div className="text-center">
      <h2 className="text-xl sm:text-5xl font-bold mb-4">Our Panels!</h2>
      <p className="text-lg sm:text-2xl mb-6 md:mb-14">Trusted by top rated brands in the area!</p>
    </div>

    
    <div className='px-4 flex flex-col items-center sm:flex-row sm:justify-center'>
        {/* image with text */}
        <PartnersTile />
        <PartnersTile />
        <PartnersTile />
        <PartnersTile />
      </div>
  
  </>
}

function StaffTile(){
  return <div className='card'>
  <div className='card-body'>

  <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-x-2 hover:-translate-y-1 hover:shadow-lg">
  <div className="card-body items-center text-center gap-4">
  <div className="w-50 h-50">
  <Image src="/chola.png" alt="" width={200} height={200} />
    </div>
    <h2 className="card-title">Dr Geetha</h2>
    
    
  </div>

   </div>
  
  
  </div>
</div>
}

function Staff() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-xl sm:text-5xl font-bold mb-4">Our Staff!</h2>
      </div>
      <div className='px-4 flex flex-col items-center sm:flex-row sm:justify-center'>
        {/* image with text */}
        <StaffTile />
        <StaffTile />
        <StaffTile />
        <StaffTile />
      </div>
    </>
  );
}


function ContactPartnerTile(){
  return <div className="card w-96 bg-base-100 shadow-xl">
  <figure><Image src="/partnership.jpg" alt="" width={380} height={280}></Image></figure>
  <div className="card-body">
    <h2 className="card-title">Become a panel member!</h2>
    <p>Click the button to contact us!</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Contact Us!</button>
    </div>
  </div>
</div>
}

function BookAppointmentTile(){
  
  return <div className="card w-96 bg-base-100 shadow-xl">
  <figure><Image src="/appointment.jpg" alt="" width={400} height={300}></Image></figure>
  <div className="card-body">
    <h2 className="card-title">Book an Appointment!</h2>
    <p>Click the button to book appointment!</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book Now!</button>
    </div>
  </div>
</div>
}

function ContactPage() {
  return (
    <>
      <div className='text-center'>
        <h2 className="text-xl sm:text-5xl font-bold mb-4">Interested?</h2>

      </div>
      <div className='flex flex-col items-center sm:flex-row sm:justify-center space-x-5 space-y-5'>
        {/* image with text */}
        <ContactPartnerTile></ContactPartnerTile>
        <BookAppointmentTile></BookAppointmentTile>
      </div>
    </>
  );
}



export default function Home() {
  return (
    <main className="">
      
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <Partners></Partners>
      <Staff></Staff>
      <ContactPage></ContactPage>


    </main>
  );
}
