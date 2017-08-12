import Memos from '~/pages/memos.vue';
import Memo from '~/pages/memo.vue';

export default [
  {
    path: '',
    component: Memos,
  },
  {
    path: '/memos/:id',
    component: Memo,
  },
];
