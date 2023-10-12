import { Fragment } from 'react';

import { Content, ImageContent, Project, QuoteContent, TextContent } from '../../types';
import { groupSplit } from '../../utils/groupSplit';

interface Prop {
  project: Project;
}

export default function ProjectBody({ project }: Prop): JSX.Element {
  const content = project.content as Content[] | null;

  const projectContentSplitByOutput =
    content && groupSplit(content, (pc) => pc.type === 'output' || pc.type === 'wideimage');
  const renderedOutput = (
    <>
      {' '}
      {projectContentSplitByOutput &&
        projectContentSplitByOutput.map((projectContents, pcId) => (
          <Fragment key={pcId}>
            {projectContents.length === 1 && projectContents[0].type === 'output' ? (
              <div className="project-output">
                <p>{(projectContents[0].value as TextContent).text}</p>
              </div>
            ) : projectContents.length === 1 && projectContents[0].type === 'wideimage' ? (
              <img
                className="project-image-wide"
                src={(projectContents[0].value as ImageContent).url}
                width="320"
                height="200"
                alt={(projectContents[0].value as ImageContent).alt}
              />
            ) : (
              <article>
                {projectContents.map((content, contentId) => (
                  <Fragment key={contentId}>
                    {content.type === 'paragraph' ? (
                      <p>{(content.value as TextContent).text}</p>
                    ) : content.type === 'heading' ? (
                      <p className="project-content-heading">
                        {(content.value as TextContent).text}
                      </p>
                    ) : content.type === 'image' ? (
                      <img
                        src={(content.value as ImageContent).url}
                        width="320"
                        height="200"
                        alt={(content.value as ImageContent).alt}
                      />
                    ) : (
                      content.type === 'quote' && (
                        <div className="project-quote">
                          <p className="project-quote--content">
                            {(content.value as QuoteContent).text}
                          </p>
                          {(content.value as QuoteContent).author && (
                            <span className="project-quote--author">
                              - {(content.value as QuoteContent).author}
                            </span>
                          )}
                        </div>
                      )
                    )}
                  </Fragment>
                ))}
              </article>
            )}
          </Fragment>
        ))}
    </>
  );
  return renderedOutput;
}
