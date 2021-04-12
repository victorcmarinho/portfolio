import React, { memo } from 'react';

import { GitHub } from 'components/GitHub';
import { Linkedin } from 'components/Linkedin';

import * as S from './styles';

interface IFooter {
  img?: string;
}

export const Footer: React.FC<IFooter> = memo(({ img }) => (
  <S.Container>
    <img src={img} alt="Imagem de perfil do Victor Marinho" />
    <S.ListLink>
      <li>
        <a href="https://github.com/victorcmarinho" rel="external">
          <GitHub width="25px" height="25px" />
          Github
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/victorcmarinho/" rel="external">
          <Linkedin width="25px" height="25px" />
          Linkedin
        </a>
      </li>
    </S.ListLink>
  </S.Container>
));
