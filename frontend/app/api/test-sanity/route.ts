import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'

export async function GET() {
  try {
    console.log('Testing Sanity connection...')
    console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
    console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET)
    console.log('API Version:', process.env.NEXT_PUBLIC_SANITY_API_VERSION)
    console.log('Token present:', !!process.env.SANITY_API_READ_TOKEN)

    // Test with hardcoded values first
    const hardcodedClient = createClient({
      projectId: 'ihhaqh4s',
      dataset: 'production',
      apiVersion: '2025-09-25',
      useCdn: true,
      token: 'skd5mOSfEIBA3IdGmiiDp00cSuWLXQTp1xMw048oC5NHYIyjioiONX3EGHRUS0lJ6a9gM6ZvwWrgEayBXTDr09N3PfpkimZKcUKSn9m54U5XGxZPwL3IoYFEngrbYPxmWuFFW2rk9sgaD1tKUkqjghhYVq9yrqEB5MsqKVdjmGM03ScqY6RR'
    })

    const result = await hardcodedClient.fetch('*[0]')

    return NextResponse.json({
      success: true,
      message: 'Sanity connection successful',
      data: result ? 'Found data' : 'No data found',
      env: {
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
        hasToken: !!process.env.SANITY_API_READ_TOKEN
      }
    })
  } catch (error) {
    console.error('Sanity connection error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      env: {
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
        hasToken: !!process.env.SANITY_API_READ_TOKEN
      }
    }, { status: 500 })
  }
}