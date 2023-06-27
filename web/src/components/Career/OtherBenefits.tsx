import { urlFor } from '../../lib/sanity';

interface Props {
  careerSchema: NonNullable<Sanity.Default.Schema.Calculator>;
}

export default function OtherBenefits({ careerSchema }: Props) {
  return (
    <div className={`col-span-1 lg:col-span-2 flex flex-col gap-y-4 py-16 justify-center`}>
      <h3>{careerSchema.benefits?.title}</h3>
      <span className="max-w-xl mb-8">{careerSchema.benefits!.subTitle}</span>
      <div className="full-screen-width flex  justify-start lg:justify-center gap-x-10 overflow-x-scroll">
        {careerSchema.benefits?.benefitItems!.map((item, index) => {
          return (
            <div
              className={`last-of-type:pr-3 first-of-type:pl-3 text-white relative flex flex-col justify-center items-center text-center max-w-[300px] min-w-[300px] max-h-[225px] min-h-[225px]`}
              key={index}
            >
              <div className="h-full w-full absolute bg-black/50 -z-10"></div>
              {item.image && (
                <img
                  className={`h-full w-full absolute -z-20`}
                  src={urlFor(item.image).width(458).height(286).url()}
                  alt={''}
                />
              )}
              <div className="-z-0 p-8">
                <h4 className="py-4">{item.title}</h4>
                <div className="flex">
                  <span className="text-2xl leading-none text-[var(--color-green)] mr-2">*</span>
                  <span className="text-xs leading-none">{item.text}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
