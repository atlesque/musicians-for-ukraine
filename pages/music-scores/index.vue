<template>
  <main>
    <section class="hero text-center flex flex-col items-center mb-8">
      <div class="w-32 h-32 mb-4">
        <img class="w-32 h-32"
        src="~/assets/images/logo/musicians-for-ukraine-logo-raven.svg"
        alt="Logo" />
      </div>
      <h1 class="max-w-xl headline-xl">
        {{ $t(`scores.meta.title`) }}
      </h1>
      <p class="md:text-xl max-w-md md:max-w-2xl">
        {{ $t(`scores.meta.description`) }}
      </p>
    </section>
    <section class="max-w-2xl mx-auto nuxt-content">
      <h2>{{ $t("scores.nationalAnthem.title") }}</h2>
      <ul>
        <li>
          <a
            href="/scores/Ukrainian_National_Anthem_-_2_Voices_in_G.pdf"
            target="_blank"
            >{{ $t(`scores.nationalAnthem.twoVoicesInG`) }}</a
          >
        </li>
        <li>
          <a
            href="/scores/Ukrainian_National_Anthem_-_4_Instruments_in_F.pdf"
            target="_blank"
            >{{ $t(`scores.nationalAnthem.fourInstrumentsInF`) }}</a
          >
        </li>
      </ul>
      <h3>{{ $t(`scores.lyrics`) }}</h3>
      <p>
        Ще не вмерла України і слава, і воля,<br />
        Ще нам, браття молодії, усміхнеться доля.<br />
        Згинуть наші воріженьки, як роса на сонці.<br />
        Запануєм і ми, браття, у своїй сторонці.
      </p>
      <p>
        Душу й тіло ми положим за нашу свободу,<br />
        І покажем, що ми, браття, козацького роду. (x2)
      </p>
      <h3>{{ $t(`scores.lyrics`) }} ({{ $t(`scores.latinAlphabet`) }})</h3>
      <p>
        Shche ne vmerla Ukrayiny, i slava, i volya,<br />
        Shche nam, brattya molodiyi, usmikhnet'ya dolya.<br />
        Zhynut' nashi vorizhen'ky, yak rosa na sontsi,<br />
        Zapanuyem i my, brattya, u svoyiy storontsi.
      </p>
      <p>
        Dushu y tilo my polozhym za nashu svobodu,<br />
        I pokazhem, shcho my, brattya, kozats'koho rodu. (x2)
      </p>
      <h3>{{ $t(`scores.lyrics`) }} ({{ $t(`scores.lyricsTranslated`) }})</h3>
      <div v-html="$t(`scores.nationalAnthem.lyricsTranslation`)"></div>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return this.$getHeadMetadata({
      title: this.$t(`scores.meta.title`),
      description: this.$t(`scores.meta.description`),
    });
  },
};
</script>

