import { defineComponent } from 'vue';
import logoImage from '@/assets/logo.png';

export default defineComponent({
  name: 'App',
  setup() {
    return () => <img alt="Vue logo" src={logoImage} />;
  },
});
