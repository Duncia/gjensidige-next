import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className="container">
        <div className="container__inner pt-lr pb-lr">
          <h1 className="txt-center pb-md">Home page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget
            mauris pharetra et ultrices. Est ultricies integer quis auctor elit
            sed vulputate. Vitae suscipit tellus mauris a diam. Volutpat blandit
            aliquam etiam erat velit scelerisque in dictum. Eu nisl nunc mi
            ipsum faucibus vitae aliquet nec. Sed odio morbi quis commodo. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a scelerisque
            purus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Quis
            imperdiet massa tincidunt nunc pulvinar sapien et ligula
            ullamcorper. Tellus mauris a diam maecenas sed enim ut sem viverra.
            Tortor dignissim convallis aenean et tortor at risus viverra. Nulla
            malesuada pellentesque elit eget. Eu turpis egestas pretium aenean
            pharetra. In eu mi bibendum neque egestas. Lobortis feugiat vivamus
            at augue eget arcu dictum varius. Justo laoreet sit amet cursus sit.
            Enim nec dui nunc mattis enim ut tellus elementum sagittis.
          </p>
        </div>
      </section>
    </main>
  );
}
