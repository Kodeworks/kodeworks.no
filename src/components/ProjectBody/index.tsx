import { Project, ProjectContent, DictProjectContents, ProjectContentImage, ProjectContentOutput, ProjectContentQuote, ProjectContentTexts, ProjectContentWideImage } from '../../types';

import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { groupSplit } from '../../utils/groupSplit';
import { getLocale, fmt } from '../../utils/useTranslation';


interface Prop {
  project: Project;
}

export default function ProjectBody({ project }: Prop): JSX.Element {
  const locale = getLocale(useRouter());
  const content = Array.isArray(project.content) ? project.content as ProjectContent[] : (project.content as DictProjectContents)[locale!]
  const projectContentSplitByOutput = groupSplit(content, pc => pc.type === 'output' || pc.type === 'wideimage');
  const renderedOutput =
    <> {
      projectContentSplitByOutput.map((projectContents, pcId) =>
        <Fragment key={pcId}>{
          (projectContents.length === 1 && projectContents[0].type === 'output') ?
            <div className="project-output">
              <p>{fmt((projectContents[0] as ProjectContentOutput).value, locale!)}</p>
            </div> :
            (projectContents.length === 1 && projectContents[0].type === 'wideimage') ?
              <img
                className="project-image-wide"
                src={'/static/photos/projects/' + (projectContents[0] as ProjectContentWideImage).value.src}
                width="320"
                height="200"
                alt={(projectContents[0] as ProjectContentWideImage).value.alt ? (projectContents[0] as ProjectContentWideImage).value.alt : ''}
              /> :
              <article>
                {projectContents.map((content, contentId) =>
                  <Fragment key={contentId}>{
                    content.type === 'texts' ?
                      (content as ProjectContentTexts).value.map((text, textId) =>
                        <p key={textId}>{fmt(text, locale!)}</p>
                      ) :
                      content.type === 'image' ?
                        <img
                          src={'/static/photos/projects/' + (content as ProjectContentImage).value.src}
                          width="320"
                          height="200"
                          alt={(content as ProjectContentImage).value.alt ? (content as ProjectContentImage).value.alt : ''}
                        /> :
                        content.type === 'quote' &&
                        <div className="project-quote">
                          <p className="project-quote--content">{fmt((content as ProjectContentQuote).value.content, locale!)}</p>
                          {(content as ProjectContentQuote).value.author &&
                            <span className="project-quote--author">- {(content as ProjectContentQuote).value.author}</span>
                          }
                        </div>
                  }</Fragment>)}
              </article>
        }</Fragment>
      )
    }</>
  return renderedOutput;
}
