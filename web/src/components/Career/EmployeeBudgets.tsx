import NumberWithSeperators from '../NumberWithSeparator';
import { urlFor } from '../../lib/sanity';
import { useContext, useEffect } from 'react';
import { useClipText } from '../../utils/useClipText';
import { ClipContentContext } from '../../context/ClipContentContext';

interface Props {
  careerSchema: NonNullable<Sanity.Default.Schema.Calculator>;
}

export default function EmployeeBudgets({ careerSchema }: Props) {
  const { changeClipMode } = useContext(ClipContentContext);
  const shouldClipText = useClipText([{ id: 'employeeBudgets', colorMode: 'green-mode' }]);

  useEffect(() => {
    changeClipMode(shouldClipText);
  }, [shouldClipText, changeClipMode]);

  return (
    <div className={`relative flex flex-col gap-y-4 justify-center py-16`} id="employeeBudgets">
      <div className="full-screen-width h-full absolute bg-[var(--color-green)] -z-10"></div>
      <h3>{careerSchema.employeeBudget!.title}</h3>
      <span className="max-w-xl mb-8">{careerSchema.employeeBudget!.subTitle}</span>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {careerSchema.employeeBudget?.epolyeeBudgetsPosts?.map((post, index) => {
          return (
            <div
              className="flex flex-col justify-start lg:justify-center items-center text-center"
              key={index}
            >
              {post.image && (
                <img
                  className="aspect-[16/9] py-4 max-w-[150px]"
                  src={urlFor(post.image).width(458).height(286).url()}
                  alt={''}
                />
              )}

              <h3 className="py-4">{post.title}</h3>
              <span>
                <strong>
                  <NumberWithSeperators
                    startValue={post.amountYearly!}
                    endValue={post.amountYearly!}
                    showCurrency
                  />
                </strong>{' '}
                per år.
              </span>
              <span>Kan spare opp til</span>
              <span>
                <strong>
                  <NumberWithSeperators
                    startValue={post.amountTotal!}
                    endValue={post.amountTotal!}
                    showCurrency
                  />
                </strong>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
