import { ImageResponse } from '@vercel/og';
import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get('title') || "Technyan's AI Digests";
    const description = searchParams.get('description') || 'Your daily AI news partner';
    const category = searchParams.get('category') || 'Other';
    const type = searchParams.get('type') || 'website';

    // カテゴリ別のTechnyans画像マッピング
    const categoryImages: { [key: string]: string } = {
      'ChatGPT': 'robot_cat_coding_1763535696477.webp',
      'Claude': 'graduate_cat_coding_1763563154017.webp',
      'Gemini': 'astronaut_cat_coding_1763535657923.webp',
      'Grok': 'gamer_cat_coding_1763535504419.webp',
      'Image Generation': 'wizard_cat_coding_1763535723015.webp',
      'Research': 'detective_cat_coding_1763535667068.webp',
      'Other': 'black_cat_coding_1763534347022.webp'
    };

    const technyansImage = categoryImages[category] || categoryImages['Other'];

    // Technyans画像のフルURL（production環境を想定）
    const baseUrl = new URL(request.url).origin;
    const technyansUrl = `${baseUrl}/technyans/webp/${technyansImage}`;

    // Fetch Technyan image and convert to base64
    let technyansImageData = '';
    try {
      const imageResponse = await fetch(technyansUrl);
      if (imageResponse.ok) {
        const arrayBuffer = await imageResponse.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString('base64');
        technyansImageData = `data:image/webp;base64,${base64}`;
      }
    } catch (error) {
      console.error('Failed to fetch Technyan image:', error);
    }

    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            background: '#FFF6D0',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 80px',
            fontFamily: 'monospace',
          }}
        >
          {/* Header with logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: 600,
                color: '#0C2340',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Technyan's AI Digests
            </div>
            {category !== 'Other' && (
              <div
                style={{
                  fontSize: 24,
                  color: '#0C2340',
                  padding: '8px 20px',
                  border: '2px solid #0C2340',
                  borderRadius: '4px',
                }}
              >
                {category}
              </div>
            )}
          </div>

          {/* Main content area */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Text content */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '700px',
                flex: 1,
              }}
            >
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 700,
                  color: '#0C2340',
                  lineHeight: 1.3,
                  marginBottom: '20px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {title}
              </div>
              {description && (
                <div
                  style={{
                    fontSize: 28,
                    color: '#142850',
                    lineHeight: 1.5,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {description}
                </div>
              )}
            </div>

            {/* Technyan character image */}
            {technyansImageData && (
              <div
                style={{
                  display: 'flex',
                  marginLeft: '40px',
                }}
              >
                <img
                  src={technyansImageData}
                  width="280"
                  height="280"
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
            )}
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-end',
              marginTop: '40px',
              fontSize: 20,
              color: '#142850',
            }}
          >
            technyanai.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );

    // Add cache headers for better performance
    const headers = new Headers(imageResponse.headers);
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');

    return new Response(imageResponse.body, {
      status: imageResponse.status,
      statusText: imageResponse.statusText,
      headers,
    });
  } catch (error) {
    console.error('OG Image generation error:', error);

    // Fallback to simple text-only image on error
    return new ImageResponse(
      (
        <div
          style={{
            background: '#FFF6D0',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'monospace',
            fontSize: 48,
            color: '#0C2340',
          }}
        >
          Technyan's AI Digests
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
};
