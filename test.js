import func from './getPlayListLinks.js';

func(
    'https://www.youtube.com/playlist?list=PLDIoUOhQQPlXr63I_vwF9GD8sAKh77dWU'
).then((links) => console.log(links));
