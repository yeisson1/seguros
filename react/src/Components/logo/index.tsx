import { useSeguros } from '../../index';
import { useMemo } from 'react';

export const Logo = () => {

    const { logo } = useSeguros();
    return useMemo(() => <img src={logo} alt="logo seguros"/>, [logo])
}

export default Logo;
