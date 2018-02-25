/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import HomeQuotes from './HomeQuotes';

export default class Home extends Component {
  state = { }

  render() {
    return (
      <Fragment>
        <div className="signs-hero">
          <div className="signs-hero-image" />
          <HomeQuotes />
        </div>
        <section>
          <h2>What are the signs of the times?</h2>
          <hr />
          <p>The signs of the times are events or experiences that God gives to people to show that something important in His work has happened or will soon happen. In the latter days, many signs for the Second Coming of the Savior have been prophesied. These signals allow faithful people to recognize God’s plan, be warned, and prepare.</p>
          <h2>What are other names of the signs of the times?</h2>
          <hr />
          <p>Apocalypse, End of the world, Armageddon, Final battle between good and evil, Day of reckoning, Day of judgement, Ragnarok - Norse, Hindu - Kali Yuga, Muslim - al-Qiyamah, Jewish - Yom Adoni, Frasokereti,  Buddhist -Maitreya</p>

          <hr />
          <p>For thousands of years, followers of Jesus Christ have looked forward to the Second Coming as a time of peace and joy. But before the Savior comes, the people of the earth will experience great trials and calamities. Our Heavenly Father wants us to be prepared for these troubles. He also expects us to be spiritually ready when the Savior comes in His glory. Therefore, He has given us signs, which are events that will tell us when the Savior’s Second Coming is near. Throughout the ages God has revealed these signs to His prophets. He has said that all faithful followers of Christ will know what the signs are and will be watching for them <a href="https://www.lds.org/scriptures/dc-testament/dc/45.39">D&C 45:39</a>. If we are obedient and faithful, we will study the scriptures and know of the signs.</p>
          <p>Some of the signs foretelling the Second Coming of Jesus Christ have already been or are now being fulfilled. Others will be fulfilled in the future.</p>
          <h2>Additional Resources</h2>
        </section>
      </Fragment>
    );
  }
}
