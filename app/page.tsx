import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-1/2 flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>AI-Powered Prompts</span>
        <p className='desc text-center'>Duis deserunt exercitation laborum labore ad est deserunt id magna do.Incididunt consectetur id amet adipisicing aute ad.Laborum nisi non mollit cillum.</p>
      </h1>

      {/* TODO Feed */}
      <Feed />
    </section>
  );
};

export default Home;
