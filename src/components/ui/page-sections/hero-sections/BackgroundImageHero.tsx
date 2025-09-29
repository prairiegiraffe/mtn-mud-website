'use client';

interface BackgroundImageHeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  announcementText?: string;
  announcementHref?: string;
  backgroundImage?: string;
  backgroundImageDark?: string;
  className?: string;
}

export default function BackgroundImageHero({
  title = 'Data to enrich your online business',
  subtitle = 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.',
  ctaText = 'Get started',
  ctaHref = '#',
  secondaryCtaText = 'Learn more',
  secondaryCtaHref = '#',
  announcementText = 'Announcing our next round of funding. Read more',
  announcementHref = '#',
  backgroundImage = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=fff&sat=-100&exp=15&blend-mode=overlay',
  backgroundImageDark = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply',
  className = '',
}: BackgroundImageHeroProps) {
  return (
    <div className={`bg-white dark:bg-gray-900 ${className}`}>
      <div className="relative isolate overflow-hidden">
        <img
          alt=""
          src={backgroundImageDark}
          className="absolute inset-0 -z-10 size-full object-cover not-dark:hidden"
        />
        <img
          alt=""
          src={backgroundImage}
          className="absolute inset-0 -z-10 size-full object-cover opacity-10 dark:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-orange-500 to-yellow-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-22 sm:py-34 lg:py-40">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-4 py-2 text-sm/6 text-white bg-orange-500/20 ring-1 ring-orange-500/30 hover:ring-orange-500/50 backdrop-blur-sm transition-all">
                {announcementText.replace(' Learn more', '')}{' '}
                <a
                  href={announcementHref}
                  className="font-bold text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-black tracking-wide text-balance text-white sm:text-7xl uppercase">
                {title}
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-white/90 sm:text-xl/8 max-w-3xl mx-auto">
                {subtitle}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href={ctaHref}
                  className="btn-primary inline-flex items-center justify-center rounded-md border-2 bg-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white border-orange-500 hover:bg-orange-600 hover:border-orange-600 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {ctaText}
                </a>
                <a
                  href={secondaryCtaHref}
                  className="btn-secondary inline-flex items-center justify-center rounded-md border-2 bg-white text-gray-800 border-white hover:bg-gray-100 px-8 py-4 text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {secondaryCtaText}{' '}
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-orange-500 to-yellow-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}
