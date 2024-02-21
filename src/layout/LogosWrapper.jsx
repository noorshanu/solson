import Title from "components/Title";

function LogosWrapper({ title, logos }) {
  return (
    <section>
      <div className="container-wrapper bg-secondary rounded-2xl p-10 lg:p-20">
        <Title className="text-center text-primary mb-8 lg:mb-14">
          {title}
        </Title>

        <div className="flex items-center flex-wrap justify-center m-[-1.2em] text-[80%] lg:text-[105%]">
          {logos.map((item, i) => (
            <img
              src={`${item.img}`}
              className={`${item.className} m-[1.2em]`}
              key={i}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogosWrapper;
