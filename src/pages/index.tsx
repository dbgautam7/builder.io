import config from '@/config/config';
import { fetchBuilderPageInfo } from '@/utils/common-utils';
import { builder, BuilderComponent, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';

builder.init(config.BUILDER_IO_API_KEY);

export async function getStaticProps() {
    /*
    Fetch the first page from Builder that matches the current URL.
    The `userAttributes` field is used for targeting content,
    learn more here: https://www.builder.io/c/docs/targeting-with-builder
  */
    const page = await fetchBuilderPageInfo(builder);
    return {
        props: {
            page: page || null,
        },
        revalidate: 5,
    };
}

export default function HomePage({ page }: any) {
    const isPreviewing = useIsPreviewing();

    if (!page && !isPreviewing) {
        return <DefaultErrorPage statusCode={404} />;
    }
    return <BuilderComponent model='page' content={page} />;
}
