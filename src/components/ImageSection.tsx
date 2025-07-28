export default function ImageSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <img
          src="/image/bottom.jpeg"
          alt="Bottom"
          className="w-full h-auto rounded-2xl shadow-lg object-cover"
        />
        <img
          src="/image/middle.jpg"
          alt="Middle"
          className="w-full h-auto rounded-2xl shadow-lg object-cover"
        />
        <img
          src="/image/top.jpg"
          alt="Top"
          className="w-full h-auto rounded-2xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}


