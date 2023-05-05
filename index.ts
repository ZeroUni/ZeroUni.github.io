import myHTML from './index.html';
const myDiv = document.createElement('div');
myDiv.innerHTML = myHTML;
document.body.appendChild(myDiv);

const nuclearPowerIntro = document.createElement('div');
nuclearPowerIntro.innerHTML = `
  <h1>Nuclear Power Intro</h1>

  <p>
    Nuclear power is the use of nuclear reactions that release nuclear energy to generate heat, which most frequently is then used in steam turbines to produce electricity in a nuclear power plant. Nuclear power can be obtained from nuclear fission, nuclear decay and nuclear fusion reactions.
  </p>

  <h2>Advantages of Nuclear Power</h2>

  <ul>
    <li>Low greenhouse gas emissions</li>
    <li>Reliable source of energy</li>
    <li>Low operating costs</li>
    <li>High energy density</li>
  </ul>

  <h2>Disadvantages of Nuclear Power</h2>

  <ul>
    <li>Radioactive waste disposal</li>
    <li>Potential for accidents</li>
    <li>High initial capital costs</li>
    <li>Proliferation concerns</li>
  </ul>

  <h2>Nuclear Power Around the World</h2>

  <p>
    According to the International Atomic Energy Agency (IAEA), there are currently 443 operating nuclear reactors in the world. The United States has the most operating reactors with 93, followed by France with 56 and China with 50.
  </p>

  <h2>Nuclear Power in the United States</h2>

  <p>
    According to the U.S. Energy Information Administration (EIA), nuclear power accounted for about 20% of total electricity generation in the United States in 2020. The United States has the largest installed nuclear capacity of any country in the world.
  </p>
`;

document.body.appendChild(nuclearPowerIntro);