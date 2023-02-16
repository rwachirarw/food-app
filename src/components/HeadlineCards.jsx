import React from "react";

function HeadlineCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">

      {/* Card */}
      <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4"> Chapo Beans</p>
          <p className="px-2">Available 24/7</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://www.shutterstock.com/shutterstock/photos/2162323019/display_1500/stock-photo-chapati-with-bean-curry-made-from-beans-indian-food-plate-or-thali-2162323019.jpg"
          alt="/"
        />
      </div>

      {/* Card */}
      <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4"> Ugali Samaki</p>
          <p className="px-2">Fresh from Lake Victoria</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://media.istockphoto.com/id/637885844/photo/traditional-african-food-ugali-fish-and-greens.jpg?s=1024x1024&w=is&k=20&c=xs0FsNg0k1dba0mruSOU1kPFnTkPfLWyTC9Focf3Bc0="
          alt="/"
        />
      </div>{/* Card */}
      <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4"> Pilau Nazi</p>
          <p className="px-2">Affordable</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://media.istockphoto.com/id/1334473708/photo/delicious-fergana-pilaf-uzbek-favorite-dish-on-wooden-background.jpg?s=1024x1024&w=is&k=20&c=Bg46QfiWC3mWK0CgkbH8zbyW87s5O6ckPMUpXDsQVZ0="
          alt="/"
        />
      </div>

    </div>
  );
}

export default HeadlineCards;
