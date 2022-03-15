export default function Loader() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <h1 className='font-mono mb-2 text-4xl capitalize [font-family:monospace] md:text-6xl'>
        hi, I&apos;m{' '}
        <span className='relative'>
          <span className='text-orange-400'>
            Ugo Romi <span className='text-3xl md:text-5xl'>👋</span>
          </span>
          <span className="absolute -bottom-0 -top-1 left-0 inline-block w-full animate-type bg-slate-900 will-change-transform [font-family:monospace] after:absolute after:block after:h-full after:w-2 after:bg-slate-400 after:content-['']"></span>
        </span>
      </h1>
    </div>
  );
}
