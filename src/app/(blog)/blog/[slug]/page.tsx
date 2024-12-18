import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { Badge, ButtonThemed, ThemeToggler } from '@/app/_global_components';
import ArticleMarkdown from '../_components/ArticleMarkdown';
import TableOfContents from '../_components/TableOfContents';
import Share from '../_components/Share';
import Author from '../_components/Author';
import Tags from '../_components/Tags';
import Link from 'next/link';
import logo from '@/../public/images/nav-logo.svg'

async function fetchPost(slug: any) {
    const options ={
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
      }
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blog/${slug}?populate=*`, 
      {
        next: {
          revalidate: 5,
        }
      }
      );
      const response = await res.json();
      return response;
    }catch (err) {
      console.error(err);
    }
  }
  export async function generateMetadata({ params }: { params: {slug: string}; }, parent: ResolvingMetadata): Promise<Metadata> {
    const post = await fetchPost(params.slug)
    const title = post.data.attributes.title;
    const slug = post.data.attributes.slug;
    const summery = post.data.attributes.summery;
    const imgUrl = post.data.attributes.clover_image.data.attributes.url;
    // const previousImages = (await parent).openGraph?.images || [];
    // console.log(imgUrl)
    return {
      title: `Stephen Leachman - ${title}`,
      description: summery,
      openGraph: {
        title: title,
        description: summery,
        url: `https://stephenleachman.com/blog/${slug}`,
        siteName: "Stephen Leachmans Personal Portfolio",
        images: [ imgUrl ],
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: title,
        description: summery,
        creator: "Stephen Leachman",
        images: [
          {
            url: imgUrl,
            width: 1200,
            height: 630,
            alt: "Blog Post Image",
          },
        ],
      }
    };
  };

const postPage = async ({params}: any) => {

    const post = await fetchPost(params.slug);    
    const Category = post.data.attributes.blog_categories.data[0].attributes;
    const content = post.data.attributes.artical
    const tags = post.data.attributes.blog_tags.data

  return (
    <div className="mb-[70px] sm:mb-0">
      <div className="bg-background-4 dark:bg-background-3 sm:border-b-[3px] border-border relative top-0 left-0 w-full overflow-hidden">
        <section className="flex justify-center z-10 px-4 md:px-10">
          <div className="container relative z-10">
            <div className="absolute top-3 w-full flex justify-between items-center">
            <Link
              href="/"
            >
            <Image
              src={logo}
              alt="Hero Logo"
              width={50}
              height={50}
              className="sm:hidden ring-1 ring-ring-color-1 rounded-sm bg-image-bg"
            >
            </Image>
            </Link>
            <ThemeToggler />
          </div>
            </div>
          </section>
        {/* <div className="bg-gradient-to-b from-primary-1 to-primary-2 absolute h-full w-full dark:hidden"></div> */}

        <section className="flex justify-center sm:px-4 md:px-10 z-10 pt-[80px] sm:pt-[100px] sm:pb-[130px] px-4 mb-5">
          <div className="container relative z-10 flex text-center justify-center">
            <div className="max-w-[980px]">
              <h1 className="text-4xl sm:text-5xl leading-snug sm:leading-normal inline-block text-heading-text">{post.data.attributes.title}</h1>
              <div className="w-[100px] h-1 bg-gradient-to-b from-primary-1 to-primary-2 rounded mx-auto inline-block m-5 "></div>
              <div className="">
                <p className="text-p-text leading-7 tracking-wider">
                  {post.data.attributes.summery}
                </p>
              </div>
              <div className="inline-block my-5">
                <Badge 
                  title={Category.category}
                  style={{'background': Category.bg_hex_color, 'color': Category.text_hex_color}}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
          
      <section className="flex justify-center mb-10 m:px-4 md:px-10 bg-background-3 dark:bg-background-4">
        <div className="container z-10 lg:max-w-[1300px]">
          <div className="sm:rounded-xl sm:shadow sm:ring-1 ring-ring-color-1 bg-background-card-2 sm:mt-[-110px] ">
            <div className="max-h-[550px] overflow-hidden sm:border-b-[3px] border-border relative  mx-5 sm:mx-0 sm:px-0">
              <div className="h-full w-full bg-image-bg absolute opacity-30 sm:rounded-t-xl rounded-xl sm:rounded-b-none"></div>
              <div className="z-30 absolute bottom-2 left-2 hidden sm:block ">
                <Tags tags={tags}/>
              </div>
              <Image 
                src={post.data.attributes.clover_image.data.attributes.formats.large.url} 
                alt={post.data.attributes.clover_image.data.attributes.alternativeText}  
                height={500}
                width={1600}
                // quality={100}
                // style={{objectFit: "fill"}}
                className="object-cover select-none max-h-[550px] sm:rounded-t-xl rounded-xl sm:rounded-b-none"
              >
              </Image>             
            </div>

            
              <div className="flex flex-col-reverse lg:flex-row sm:gap-5 px-5 xl:px-10">
                <div className="flex-auto w-full xl:pr-[100px]">
                  <Author post={post}/>
                  <ArticleMarkdown content={content}/>
                  <div className="lg:hidden sm:my-5">
                    <Share post={post}/>
                  </div>
                </div>

                  <div className="lg:w-[420px] xl:w-[500px] flex flex-col sm:gap-5 ">
                    <div className="top-0 sticky sm:pt-5">
                      <div className="flex flex-col sm:gap-5">
                        <div className="z-30 sm:hidden mt-5">
                          <Tags tags={tags}/>
                        </div>
                        <TableOfContents content={content}/>
                        <div className="hidden lg:block">
                         <Share post={post}/>
                        </div>
                      </div>
                    </div>
                  </div>

            </div>
          </div>
        </div>
      </section>
      

    </div>
  )
}
export default postPage;