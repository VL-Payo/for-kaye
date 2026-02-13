
export interface Step {
  id: number;
  type: 'intro' | 'ghibli' | 'kdrama' | 'memory' | 'surprise';
  message: string;
  image?: string;
  buttonLabel: string;
}
