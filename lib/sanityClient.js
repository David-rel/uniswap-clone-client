import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'not4529d',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skiiEwQknQ1jUzHcifzue0wcLqWyjIVLomxf4Tnk87i5Yxz256d2K8vr99pKpfKOPpmcHXtpz7a9CZaxEQwy7F9OiuKCa2BeRMrqAYjgC4femRlNMasVJK6HBwdP3YQVxgrUXsMrMncBhuTj94U2Pdy8WH6BrbNI4JzWuLgPDD4c1D2FgCdh',
  useCdn: false,
})