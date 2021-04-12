import React, { memo } from 'react';

import { Star } from 'components/Star';
import { Text } from 'components/Text';
import { Title } from 'components/Title';

import { ICard } from './interface';
import * as S from './styles';

export const Card: React.FC<ICard> = memo(
  ({ labels, stars, text, title, url }) => {
    return (
      <S.Article>
        <a href={url} rel="external noreferrer" target="_blank">
          <Title as="h3">{labels}</Title>
          <Title as="h2">{title}</Title>
          <Text>{text}</Text>

          <S.StarsContainer>
            <Star height="1.2rem" width="1.2rem" /> <Text>{stars}</Text>
          </S.StarsContainer>
        </a>
      </S.Article>
    );
  },
);
