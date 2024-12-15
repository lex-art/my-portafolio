declare const Motion: {
  animate: {
      (sequence: AnimationSequence, options?: SequenceOptions): AnimationPlaybackControls;
      (value: string | MotionValue<string>, keyframes: string | GenericKeyframesTarget<string>, options?: ValueAnimationTransition<string>): AnimationPlaybackControls;
      (value: number | MotionValue<number>, keyframes: number | GenericKeyframesTarget<number>, options?: ValueAnimationTransition<number>): AnimationPlaybackControls;
      <V>(value: V | MotionValue<V>, keyframes: V | GenericKeyframesTarget<V>, options?: ValueAnimationTransition<V>): AnimationPlaybackControls;
      (element: ElementOrSelector, keyframes: DOMKeyframesDefinition, options?: DynamicAnimationOptions): AnimationPlaybackControls;
      <O extends {}>(object: O | O[], keyframes: ObjectTarget<O>, options?: DynamicAnimationOptions): AnimationPlaybackControls;
  };
  
};