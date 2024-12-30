import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  PlayCircle,
  Stars,
  BookOpen,
  Trophy,
  Users,
  Quote,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import "@fontsource/poppins";

const Home = () => {
  const [countUpKey, setCountUpKey] = useState(0);

  const { ref: statsRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setCountUpKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/img/bg-hero.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay bg-gradient-to-b from-transparent to-[#FFEEDA]"></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-[#d23e2c]">
                <span className="absolute inset-0" aria-hidden="true"></span>
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance font-dynapuff text-5xl font-semibold tracking-tight text-[#d23e2c] sm:text-7xl">
              Cool Tour to See Our Culture
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
              Yuk, kenali budaya Indonesia lewat games seru, quiz interaktif,
              dan petualangan digital yang bikin kamu makin cinta Indonesia! ✨
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#d23e2c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Mulai Petualangan
              </a>
              <a href="#" className="text-sm font-semibold text-gray-900">
                Main Games <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-b from-[#FFEEDA] to-white/5 flex items-center justify-center">
        <div className="relative isolate px-6 pt-14 lg:px-8 w-full max-w-7xl">
          <div
            className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white to-white opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>

          <div className="flex items-center justify-between space-x-10">
            <div className="flex flex-wrap lg:flex-nowrap gap-8">
              {/* Left Section: Title and description */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-5xl font-semibold text-[#d23e2c] sm:text-7xl font-poppins">
                  Kenali fitur kami!
                </h1>
                <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat.
                </p>
              </div>

              {/* Right Section: Carousel with Cards */}
              <div className="flex-1 flex justify-center relative order-2 lg:order-none">
                <div className="carousel w-full max-w-lg shadow-xl">
                  {/* Slide 1 */}
                  <div id="slide1" className="carousel-item w-full relative">
                    <div className="card bg-base-100 shadow-xl">
                      <figure className="px-10 pt-10">
                        <img
                          src="/img/game-icon.jpg"
                          alt="game"
                          className="rounded-xl"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold font-poppins">
                          Games Seru
                        </h2>
                        <p className="font-poppins">
                          Main game sambil belajar tentang budaya Indonesia.
                          Koleksi badge dan naik level! 🎮
                        </p>
                        <div className="card-actions">
                          <button></button>
                        </div>
                      </div>
                    </div>
                    {/* Carousel Navigation */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
                      <a href="#slide3" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide2" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div id="slide2" className="carousel-item w-full relative">
                    <div className="card bg-base-100 shadow-xl">
                      <figure className="px-24 pt-24">
                        <img
                          src="/img/tour.jpg"
                          alt="tour"
                          className="rounded-xl"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold font-poppins">
                          Petualangan Digital
                        </h2>
                        <p className="font-poppins">
                          Jelajahi Indonesia dengan AR dan peta interaktif.
                          Temukan harta karun budaya! 🗺️
                        </p>
                        <div className="card-actions">
                          <button></button>
                          <h2 className="card-title text-white mb-4">ha</h2>
                        </div>
                        <div className="card-actions">
                          <button></button>
                        </div>
                      </div>
                    </div>
                    {/* Carousel Navigation */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
                      <a href="#slide1" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide3" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>

                  {/* Slide 3 */}
                  <div id="slide3" className="carousel-item w-full relative">
                    <div className="card bg-base-100 shadow-xl">
                      <figure className="px-10 pt-10">
                        <img
                          src="/img/quiz.jpg"
                          alt="quiz"
                          className="rounded-xl"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title font-poppins font-bold">
                          Quiz Interaktif
                        </h2>
                        <p className="font-poppins">
                          Uji pengetahuanmu tentang budaya Indonesia dengan quiz
                          seru! 📚
                        </p>
                        <div className="card-actions">
                          <button></button>
                        </div>
                      </div>
                    </div>
                    {/* Carousel Navigation */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
                      <a href="#slide2" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide1" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Jelajahi
                </span>{" "}
                <span className="text-gray-800">
                  Budaya Indonesia dengan Cara Keren! 🚀
                </span>
              </h1>
              <p className="text-gray-600 text-lg">
                Yuk, kenali budaya Indonesia lewat games seru, quiz interaktif,
                dan petualangan digital yang bikin kamu makin cinta Indonesia!
                ✨
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
                  Mulai Petualangan
                  <PlayCircle className="w-5 h-5" />
                </button>
                <button className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-6 py-3 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
                  Lihat Games
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-full h-96 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl overflow-hidden relative">
                <img
                  src="/api/placeholder/600/500"
                  alt="Cultural Illustration"
                  className="w-full h-full object-cover mix-blend-overlay opacity-50"
                />
                {/* Floating Elements */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-bounce">
                  <span className="text-sm font-medium">🎭 38 Provinsi</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-bounce delay-150">
                  <span className="text-sm font-medium">🎮 Games</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Games Seru</h3>
              <p className="text-gray-600">
                Main game sambil belajar tentang budaya Indonesia. Koleksi badge
                dan naik level! 🎮
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Stars className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Petualangan Digital</h3>
              <p className="text-gray-600">
                Jelajahi Indonesia dengan AR dan peta interaktif. Temukan harta
                karun budaya! 🗺️
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quiz Interaktif</h3>
              <p className="text-gray-600">
                Uji pengetahuanmu tentang budaya Indonesia dengan quiz seru! 📚
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map Preview */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Jelajahi Peta Budaya Indonesia 🗺️
            </h2>
            <div className="aspect-video bg-white/10 rounded-2xl overflow-hidden">
              <img
                src="/api/placeholder/800/400"
                alt="Interactive Map Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* statistik Section */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Users className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold">Statistik</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-4xl font-bold" ref={statsRef}>
              <CountUp
                key={countUpKey}
                start={0}
                end={718}
                duration={2}
                separator=","
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
              />
              <p className="text-sm text-gray-600 mt-2">Bahasa Daerah</p>
            </div>
            <div className="text-4xl font-bold" ref={statsRef}>
              <CountUp
                key={countUpKey}
                start={0}
                end={38}
                duration={2}
                separator=","
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
              />
              <p className="text-sm text-gray-600 mt-2">Provinsi</p>
            </div>
            <div className="text-4xl font-bold" ref={statsRef}>
              <CountUp
                key={countUpKey}
                start={0}
                end={1340}
                duration={2}
                separator=","
                className="bg-gradient-to-r from-pink-600 to-red-600 text-transparent bg-clip-text"
              />
              <p className="text-sm text-gray-600 mt-2">Suku Bangsa</p>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-12">Kata Mereka</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-3xl relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-600 mt-4 mb-4">
                  "Belajar budaya jadi seru banget! Anak-anak saya jadi lebih
                  tertarik dengan warisan budaya Indonesia."
                </p>
                <p className="font-bold text-blue-600">Sarah Wijaya</p>
                <p className="text-sm text-gray-500">Guru SD</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-3xl relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-600 mt-4 mb-4">
                  "Game-gamenya seru abis! Sambil main jadi tau banyak tentang
                  Indonesia. Keren!"
                </p>
                <p className="font-bold text-purple-600">Budi Santoso</p>
                <p className="text-sm text-gray-500">Pelajar SMP</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-3xl relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-600 mt-4 mb-4">
                  "Platform yang bagus untuk mengenalkan keanekaragaman budaya
                  Indonesia kepada generasi muda."
                </p>
                <p className="font-bold text-pink-600">Dewi Putri</p>
                <p className="text-sm text-gray-500">Pegiat Budaya</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Memulai Petualangan? 🚀
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Buat akun gratis dan mulai jelajahi budaya Indonesia!
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all duration-300">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
