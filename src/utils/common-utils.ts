import { Builder } from '@builder.io/react';

/*
    Fetch all published pages for the current model.
    Using the `fields` option will limit the size of the response
    and only return the `data.url` field from the matching pages.
*/
export const fetchAllBuilderPages = async (builder: Builder) =>
    await builder.getAll('page', {
        fields: 'data.url', // only request the `data.url` field
        options: { noTargeting: true },
        limit: 0,
    });

export const fetchBuilderPageInfo = async (builder: Builder, params?: any) =>
    await builder
        .get('page', {
            userAttributes: {
                urlPath: '/' + (params?.page?.join('/') || ''),
            },
        })
        .toPromise();
