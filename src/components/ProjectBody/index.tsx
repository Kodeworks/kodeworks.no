import { Project, ProjectContentImage, ProjectContentOutput, ProjectContentQuote, ProjectContentQuoteContent, ProjectContentTexts, ProjectContentWideImage } from '../../types';

import { Fragment } from 'react';
import { groupSplit } from '../../utils/groupSplit';
import { NextRouter, useRouter } from 'next/router';
import { getLocale } from '../../utils/useTranslation';


interface Prop {
  project: Project;
}

export default function ProjectBody({ project }: Prop): JSX.Element {
  const locale = getLocale(useRouter());

  const projectContentSplitByOutput = groupSplit(project.content!, pc => pc.type === 'output' || pc.type === 'wideimage');
  const renderedOutput =
    <> {
      projectContentSplitByOutput.map((projectContents, pcId) =>
        <Fragment key={pcId}>{
          (projectContents.length === 1 && projectContents[0].type === 'output') ?
            <div className="project-output">
              <p>{(projectContents[0] as ProjectContentOutput).value}</p>
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
                        <p key={textId}>{typeof text === 'string' ? (text as string) : text[locale!]
                        }</p>
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
                          <p className="project-quote--content">{(content as ProjectContentQuote).value.content}</p>
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
