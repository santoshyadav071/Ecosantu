export const Detail3 = () => {
  return (
    <>
      <section className="bg-white p-4 md:p-6 lg:p-8">
        <div className="space-y-6">
          {[
            {
              question: "What are the best slip-on shoes for the airport and travel?",
              answer: "Allbirds offers two shoes that are ideal for going from plane to pavement. Whether you’re headed straight to the hotel or checking out the sites and sounds of the city, slip-ons are a great solution for on-the-go travelers. Our Tree Loungers are easy breezy and lightweight. Slip them on and off going through airport security, and enjoy their breathable comfort and versatility every other moment of your trip. (If your travels are taking you to colder climates, we recommend going with the Wool Loungers for added warmth.) The Tree Dasher Relay offers the look and feel of a running shoe, but has a seamless one-piece upper. The lightly padded heel collar keeps your shoes in place during those long walks through the terminal and wherever else your steps take you."
            },
            {
              question: "Should you wear socks with slip-on shoes?",
              answer: "The choice is entirely up to you! Some Allbirds wearers are perfectly fine going sockless in their slip-on shoes, but like any shoe, going without socks for an extended period of time may result in chaffing and blisters on your bare feet, especially if you are logging a high amount of steps on a regular basis. That said, if you want that sleek, no-sock look with your slip-ons, we recommend our Trino™ Anytime No Show Sock."
            },
            {
              question: "Are Allbirds shoes itchy?",
              answer: "Nope! Allbirds shoes are designed with comfort at the forefront and feature our signature ZQ-Certified merino wool, which is softer and less irritating than regular wool. With fibers that are 20% the diameter of human hair, our superfine merino wool is breathable and moisture-wicking, plus it’s a renewable resource, thanks to our free-spirited Allbirds sheep. However, everyone's skin sensitivity varies. While most people find Allbirds shoes to be extremely comfortable and itch-free, there may be a small number of people who might find them slightly itchy if they wear them without socks. You should also remember that the shoes need a few days of wear to break in fully and become more comfortable."
            },
            {
              question: "Does water-resistant mean rainproof?",
              answer: "No, water-resistant doesn't mean waterproof. Water-resistant materials can endure light rain and occasional splashes without letting moisture seep into the shoe. They’re great for bashing around comfortably in all conditions. The Allbirds Mizzles are crafted with a wool upper that's been treated with a water-repellent coating. This helps to ward off water and rain in damp conditions, keeping your feet drier."
            },
            {
              question: "Should slip-on shoes feel tight or loose?",
              answer: "Your slip-on shoes should give you a secure fit without feeling overly constricting. They should feel comfortable and stable, with minimal slippage as you walk. However, it's equally important that they aren't so tight that they cause rubbing or pinching—no one wants discomfort or blisters from tight shoes. In general, there should be sufficient space in the front part of the shoe (the toe box) for your toes to wiggle freely. Plus, a small gap (roughly the width of your thumb) should exist between your longest toe and the tip of the shoe."
            }
          ].map(({ question, answer }, index) => (
            <div key={index}>
              <hr className="border-black my-4" />
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer">
                  <span className="text-lg md:text-xl font-bold">{question}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-2 text-sm md:text-base">{answer}</p>
              </details>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
