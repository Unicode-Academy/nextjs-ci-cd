type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post 1: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <h1>Slug 1: {params.slug}</h1>;
}
