import strings from '@/res/strings';
import expressLoader from './express';

export default async ({ expressApp }) => {
    await expressLoader({ app: expressApp });
    console.log(strings.expressLoaded);
}